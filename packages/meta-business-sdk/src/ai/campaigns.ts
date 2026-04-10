import { tool } from "ai";
import { z } from "zod";
import type { MetaClient } from "./common.ts";

export function createCampaignTools(opts: { api: MetaClient; adAccountId: string }) {
  const { api, adAccountId } = opts;

  return {
    campaign_list: tool({
      description: "List ad campaigns in the ad account.",
      inputSchema: z.object({
        limit: z.number().optional().describe("Maximum number of campaigns"),
      }),
      execute: async ({ limit }) => {
        const cursor = api.adAccount(adAccountId).campaigns.list({
          fields: ["id", "name", "status", "objective", "daily_budget", "lifetime_budget", "created_time"],
          params: limit ? { limit } : undefined,
        });
        return cursor.toArray();
      },
    }),

    campaign_get: tool({
      description: "Get details of a specific ad campaign.",
      inputSchema: z.object({
        campaignId: z.string().describe("Campaign ID"),
      }),
      execute: async ({ campaignId }) => {
        return api.campaign(campaignId).get({
          fields: ["id", "name", "status", "objective", "daily_budget", "lifetime_budget", "bid_strategy", "created_time", "start_time", "stop_time"],
        });
      },
    }),

    campaign_create: tool({
      description: "Create a new ad campaign.",
      inputSchema: z.object({
        name: z.string().describe("Campaign name"),
        objective: z.string().describe("Campaign objective (e.g., OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_SALES, OUTCOME_TRAFFIC)"),
        status: z.enum(["ACTIVE", "PAUSED"]).optional().describe("Initial status (default: PAUSED)"),
        dailyBudget: z.number().optional().describe("Daily budget in cents"),
        specialAdCategories: z.array(z.string()).optional().describe("Special ad categories (e.g., CREDIT, EMPLOYMENT, HOUSING)"),
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
      inputSchema: z.object({
        campaignId: z.string().describe("Campaign ID"),
        name: z.string().optional().describe("New campaign name"),
        status: z.enum(["ACTIVE", "PAUSED", "ARCHIVED", "DELETED"]).optional().describe("New status"),
        dailyBudget: z.number().optional().describe("New daily budget in cents"),
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
      inputSchema: z.object({
        campaignId: z.string().describe("Campaign ID to delete"),
      }),
      execute: async ({ campaignId }) => api.campaign(campaignId).delete(),
    }),

    adset_list: tool({
      description: "List ad sets in the ad account.",
      inputSchema: z.object({
        limit: z.number().optional(),
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
      inputSchema: z.object({
        limit: z.number().optional(),
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
      inputSchema: z.object({
        datePreset: z.string().optional().describe("Date preset (e.g., today, yesterday, last_7d, last_30d, this_month)"),
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
