import type { Tool } from "ai";

export type ToolCategory =
  | "instagram"
  | "facebook"
  | "threads"
  | "campaigns"
  | "publish"
  | "comments"
  | "messaging"
  | "insights"
  | "management";

// Map each tool name to its categories
const TOOL_CATEGORIES: Record<string, ToolCategory[]> = {
  // Instagram
  ig_publish_photo: ["instagram", "publish"],
  ig_publish_video: ["instagram", "publish"],
  ig_publish_carousel: ["instagram", "publish"],
  ig_publish_story: ["instagram", "publish"],
  ig_list_media: ["instagram", "management"],
  ig_get_media_insights: ["instagram", "insights"],
  ig_get_permalink: ["instagram", "management"],
  ig_comment_create: ["instagram", "comments"],
  ig_comment_reply: ["instagram", "comments"],
  ig_comment_list: ["instagram", "comments"],
  ig_comment_hide: ["instagram", "comments"],
  ig_comment_delete: ["instagram", "comments"],
  ig_send_dm: ["instagram", "messaging"],
  ig_reply_dm: ["instagram", "messaging"],
  ig_private_reply: ["instagram", "messaging"],
  ig_get_account: ["instagram", "management"],
  ig_webhook_subscribe: ["instagram", "management"],
  // Facebook
  fb_publish_post: ["facebook", "publish"],
  fb_publish_photo: ["facebook", "publish"],
  fb_publish_multi_photo: ["facebook", "publish"],
  fb_publish_video_reel: ["facebook", "publish"],
  fb_publish_photo_story: ["facebook", "publish"],
  fb_publish_video_story: ["facebook", "publish"],
  fb_list_feed: ["facebook", "management"],
  fb_update_post: ["facebook", "management"],
  fb_delete_post: ["facebook", "management"],
  fb_get_permalink: ["facebook", "management"],
  fb_comment_create: ["facebook", "comments"],
  fb_comment_reply: ["facebook", "comments"],
  fb_comment_list: ["facebook", "comments"],
  fb_comment_hide: ["facebook", "comments"],
  fb_send_dm: ["facebook", "messaging"],
  fb_reply_dm: ["facebook", "messaging"],
  fb_get_account: ["facebook", "management"],
  fb_webhook_subscribe: ["facebook", "management"],
  // Threads
  threads_publish_text: ["threads", "publish"],
  threads_publish_image: ["threads", "publish"],
  threads_publish_video: ["threads", "publish"],
  threads_publish_carousel: ["threads", "publish"],
  threads_reply: ["threads", "comments"],
  threads_delete: ["threads", "management"],
  threads_get_permalink: ["threads", "management"],
  threads_get_insights: ["threads", "insights"],
  threads_list_posts: ["threads", "management"],
  threads_list_replies: ["threads", "comments"],
  threads_hide_reply: ["threads", "comments"],
  threads_get_account: ["threads", "management"],
  // Campaigns
  campaign_list: ["campaigns", "management"],
  campaign_get: ["campaigns", "management"],
  campaign_create: ["campaigns", "management"],
  campaign_update: ["campaigns", "management"],
  campaign_delete: ["campaigns", "management"],
  adset_list: ["campaigns", "management"],
  ad_list: ["campaigns", "management"],
  ad_account_insights: ["campaigns", "insights"],
};

/**
 * Filter tools by categories. Returns only tools matching ANY of the specified categories.
 */
export function filterTools<T extends Record<string, Tool>>(
  tools: T,
  categories: ToolCategory[],
): Partial<T> {
  const result: Record<string, Tool> = {};
  for (const [name, t] of Object.entries(tools)) {
    const cats = TOOL_CATEGORIES[name] ?? [];
    if (categories.some((c) => cats.includes(c))) {
      result[name] = t;
    }
  }
  return result as Partial<T>;
}

/**
 * Filter tools by name pattern (glob-like with * wildcard).
 */
export function filterToolsByName<T extends Record<string, Tool>>(
  tools: T,
  patterns: string[],
): Partial<T> {
  const result: Record<string, Tool> = {};
  for (const [name, t] of Object.entries(tools)) {
    if (patterns.some((p) => matchPattern(p, name))) {
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

/**
 * Limit the number of tools (picks first N).
 */
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

/**
 * Get categories for a tool by name.
 */
export function getToolCategories(toolName: string): ToolCategory[] {
  return TOOL_CATEGORIES[toolName] ?? [];
}

/**
 * Get all available category names.
 */
export function getAvailableCategories(): ToolCategory[] {
  return [
    "instagram",
    "facebook",
    "threads",
    "campaigns",
    "publish",
    "comments",
    "messaging",
    "insights",
    "management",
  ];
}
