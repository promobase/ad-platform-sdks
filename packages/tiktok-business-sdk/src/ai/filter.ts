import type { Tool } from "ai";

export type ToolCategory = "content" | "comments" | "account" | "messaging" | "publish" | "insights" | "management" | "moderation";

const TOOL_CATEGORIES: Record<string, ToolCategory[]> = {
  // Content
  tt_publish_video: ["content", "publish"],
  tt_publish_photo: ["content", "publish"],
  tt_get_publish_status: ["content", "management"],
  tt_list_videos: ["content", "management"],
  tt_get_video_settings: ["content", "management"],
  tt_get_hashtag_suggestions: ["content", "publish"],
  // Comments
  tt_comment_list: ["comments", "management"],
  tt_comment_create: ["comments"],
  tt_comment_reply: ["comments"],
  tt_comment_like: ["comments", "moderation"],
  tt_comment_hide: ["comments", "moderation"],
  tt_comment_delete: ["comments", "moderation"],
  tt_comment_list_replies: ["comments", "management"],
  // Account
  tt_get_account: ["account", "insights"],
  tt_get_benchmarks: ["account", "insights"],
  tt_spark_ads_enable: ["account", "management"],
  tt_spark_ads_status: ["account", "management"],
  // Messaging
  tt_send_message: ["messaging"],
  tt_list_conversations: ["messaging", "management"],
  tt_list_messages: ["messaging", "management"],
  tt_list_mentioned_videos: ["messaging", "insights"],
};

/** Filter tools by categories. Returns only tools matching ANY of the specified categories. */
export function filterTools<T extends Record<string, Tool>>(tools: T, categories: ToolCategory[]): Partial<T> {
  const result: Record<string, Tool> = {};
  for (const [name, t] of Object.entries(tools)) {
    const cats = TOOL_CATEGORIES[name] ?? [];
    if (categories.some(c => cats.includes(c))) {
      result[name] = t;
    }
  }
  return result as Partial<T>;
}

/** Filter tools by name pattern (glob-like with * wildcard). */
export function filterToolsByName<T extends Record<string, Tool>>(tools: T, patterns: string[]): Partial<T> {
  const result: Record<string, Tool> = {};
  for (const [name, t] of Object.entries(tools)) {
    if (patterns.some(p => matchPattern(p, name))) {
      result[name] = t;
    }
  }
  return result as Partial<T>;
}

function matchPattern(pattern: string, name: string): boolean {
  if (pattern === "*") return true;
  if (pattern.endsWith("*")) return name.startsWith(pattern.slice(0, -1));
  if (pattern.startsWith("*")) return name.endsWith(pattern.slice(1));
  return pattern === name;
}

/** Limit the number of tools (picks first N). */
export function limitTools<T extends Record<string, Tool>>(tools: T, maxTools: number): Partial<T> {
  const result: Record<string, Tool> = {};
  let count = 0;
  for (const [name, t] of Object.entries(tools)) {
    if (count >= maxTools) break;
    result[name] = t;
    count++;
  }
  return result as Partial<T>;
}

/** Get categories for a tool by name. */
export function getToolCategories(toolName: string): ToolCategory[] {
  return TOOL_CATEGORIES[toolName] ?? [];
}

/** Get all available category names. */
export function getAvailableCategories(): ToolCategory[] {
  return ["content", "comments", "account", "messaging", "publish", "insights", "management", "moderation"];
}
