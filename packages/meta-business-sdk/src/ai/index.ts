import { createInstagramTools } from "./instagram.ts";
import { createFacebookTools } from "./facebook.ts";
import { createThreadsTools } from "./threads.ts";
import { createCampaignTools } from "./campaigns.ts";
import type { MetaClient } from "./common.ts";

export type { MetaClient } from "./common.ts";

// Infer return types from each tool creator
type InstagramTools = ReturnType<typeof createInstagramTools>;
type FacebookTools = ReturnType<typeof createFacebookTools>;
type ThreadsTools = ReturnType<typeof createThreadsTools>;
type CampaignTools = ReturnType<typeof createCampaignTools>;

type ToolGroup = "instagram" | "facebook" | "threads" | "campaigns";

// Map group names to their tool types
type ToolGroupMap = {
  instagram: InstagramTools;
  facebook: FacebookTools;
  threads: ThreadsTools;
  campaigns: CampaignTools;
};

// Merge selected tool groups into a single flat type
type MergeTools<T extends ToolGroup[]> = T extends []
  ? InstagramTools & FacebookTools & ThreadsTools & CampaignTools  // default: all
  : (T[number] extends infer G ? G extends ToolGroup ? ToolGroupMap[G] : never : never);

// Flatten union of objects into a single intersection
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export interface CreateMetaToolsOptions<T extends ToolGroup[] = ToolGroup[]> {
  api: MetaClient;
  igAccountId?: string;
  pageId?: string;
  pageAccessToken?: string;
  threadsUserId?: string;
  threadsAccessToken?: string;
  adAccountId?: string;
  include?: T;
}

export function createMetaTools<const T extends ToolGroup[] = ToolGroup[]>(
  opts: CreateMetaToolsOptions<T>,
): UnionToIntersection<MergeTools<T>> {
  const include = opts.include ?? (["instagram", "facebook", "threads", "campaigns"] as ToolGroup[]);
  let tools: Record<string, unknown> = {};

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

  return tools as UnionToIntersection<MergeTools<T>>;
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
