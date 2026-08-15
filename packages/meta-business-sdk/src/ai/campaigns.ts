import { tool, type Tool } from "ai";
import * as v from "valibot";

import type { GraphClient } from "./common.ts";

export function createCampaignTools(opts: {
  api: GraphClient;
  adAccountId: string;
}): Record<
  | "campaign_list"
  | "campaign_get"
  | "campaign_create"
  | "campaign_update"
  | "campaign_delete"
  | "adset_list"
  | "ad_list"
  | "ad_account_insights",
  Tool
> {
  const { api, adAccountId } = opts;

  return {
    campaign_list: tool({
      description: "List ad campaigns in the ad account.",
      inputSchema: v.object({
        limit: v.optional(v.number()),
      }),
      execute: async ({ limit }) => {
        const cursor = api.adAccount(adAccountId).campaigns.list({
          fields: [
            "id",
            "name",
            "status",
            "objective",
            "daily_budget",
            "lifetime_budget",
            "created_time",
          ],
          params: limit ? { limit } : undefined,
        });
        return cursor.toArray();
      },
    }),

    campaign_get: tool({
      description: "Get details of a specific ad campaign.",
      inputSchema: v.object({
        campaignId: v.string(),
      }),
      execute: async ({ campaignId }) => {
        return api.campaign(campaignId).get({
          fields: [
            "id",
            "name",
            "status",
            "objective",
            "daily_budget",
            "lifetime_budget",
            "bid_strategy",
            "created_time",
            "start_time",
            "stop_time",
          ],
        });
      },
    }),

    campaign_create: tool({
      description: "Create a new ad campaign.",
      inputSchema: v.object({
        name: v.string(),
        objective: v.string(),
        status: v.optional(v.picklist(["ACTIVE", "PAUSED"])),
        dailyBudget: v.optional(v.number()),
        specialAdCategories: v.optional(v.array(v.string())),
      }),
      execute: async ({ name, objective, status, dailyBudget, specialAdCategories }) => {
        return api.adAccount(adAccountId).campaigns.create({
          name,
          objective,
          status: status ?? "PAUSED",
          daily_budget: dailyBudget,
          special_ad_categories: specialAdCategories ?? [],
        } as any);
      },
    }),

    campaign_update: tool({
      description: "Update an existing ad campaign.",
      inputSchema: v.object({
        campaignId: v.string(),
        name: v.optional(v.string()),
        status: v.optional(v.picklist(["ACTIVE", "PAUSED", "ARCHIVED", "DELETED"])),
        dailyBudget: v.optional(v.number()),
      }),
      execute: async ({ campaignId, name, status, dailyBudget }) => {
        return api.campaign(campaignId).update({
          name,
          status,
          daily_budget: dailyBudget,
        } as any);
      },
    }),

    campaign_delete: tool({
      description: "Delete an ad campaign.",
      inputSchema: v.object({
        campaignId: v.string(),
      }),
      execute: async ({ campaignId }) => api.campaign(campaignId).delete(),
    }),

    adset_list: tool({
      description: "List ad sets in the ad account.",
      inputSchema: v.object({
        limit: v.optional(v.number()),
      }),
      execute: async ({ limit }) => {
        const cursor = api.adAccount(adAccountId).adsets.list({
          fields: ["id", "name", "status", "daily_budget", "targeting", "start_time", "end_time"],
          params: limit ? { limit } : undefined,
        });
        return cursor.toArray();
      },
    }),

    ad_list: tool({
      description: "List ads in the ad account.",
      inputSchema: v.object({
        limit: v.optional(v.number()),
      }),
      execute: async ({ limit }) => {
        const cursor = api.adAccount(adAccountId).ads.list({
          fields: ["id", "name", "status", "creative", "adset_id"],
          params: limit ? { limit } : undefined,
        });
        return cursor.toArray();
      },
    }),

    ad_account_insights: tool({
      description: "Get performance insights for the ad account.",
      inputSchema: v.object({
        datePreset: v.optional(v.string()),
      }),
      execute: async ({ datePreset }) => {
        const cursor = api.adAccount(adAccountId).insights.list({
          fields: ["impressions", "clicks", "spend", "cpc", "cpm", "ctr", "reach", "frequency"],
          params: datePreset ? { date_preset: datePreset } : undefined,
        });
        return cursor.toArray();
      },
    }),
  };
}
