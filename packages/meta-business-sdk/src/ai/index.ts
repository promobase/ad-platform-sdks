import { createInstagramTools } from "./instagram.ts";
import { createFacebookTools } from "./facebook.ts";
import { createThreadsTools } from "./threads.ts";
import { createCampaignTools } from "./campaigns.ts";
import type { MetaClient } from "./common.ts";

export type { MetaClient } from "./common.ts";

export interface CreateMetaToolsOptions {
  api: MetaClient;
  igAccountId?: string;
  pageId?: string;
  pageAccessToken?: string;
  threadsUserId?: string;
  threadsAccessToken?: string;
  adAccountId?: string;
  include?: ("instagram" | "facebook" | "threads" | "campaigns")[];
}

export function createMetaTools(opts: CreateMetaToolsOptions) {
  const include = opts.include ?? ["instagram", "facebook", "threads", "campaigns"];
  let tools: Record<string, any> = {};

  if (include.includes("instagram") && opts.igAccountId) {
    tools = { ...tools, ...createInstagramTools({ api: opts.api, igAccountId: opts.igAccountId }) };
  }

  if (include.includes("facebook") && opts.pageId && opts.pageAccessToken) {
    tools = { ...tools, ...createFacebookTools({ api: opts.api, pageId: opts.pageId, accessToken: opts.pageAccessToken }) };
  }

  if (include.includes("threads") && opts.threadsUserId) {
    tools = { ...tools, ...createThreadsTools({
      accessToken: opts.threadsAccessToken ?? "",
      threadsUserId: opts.threadsUserId,
    })};
  }

  if (include.includes("campaigns") && opts.adAccountId) {
    tools = { ...tools, ...createCampaignTools({ api: opts.api, adAccountId: opts.adAccountId }) };
  }

  return tools;
}

// Re-export individual tool creators for selective use
export { createInstagramTools } from "./instagram.ts";
export { createFacebookTools } from "./facebook.ts";
export { createThreadsTools } from "./threads.ts";
export { createCampaignTools } from "./campaigns.ts";

// Middleware, filtering, and routing
export { withMiddleware } from "./middleware.ts";
export type { ToolMiddleware, ToolCallContext } from "./middleware.ts";
export { filterTools, filterToolsByName, limitTools, getToolCategories, getAvailableCategories } from "./filter.ts";
export type { ToolCategory } from "./filter.ts";
export { createRouter } from "./router.ts";
export type { RouterOptions } from "./router.ts";
