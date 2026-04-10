import { tool } from "ai";
import { z } from "zod";
import { createTikTokClient } from "../clients/index.ts";
import type { TikTokClientOptions } from "../clients/types.ts";

export function createTikTokAccountTools(opts: TikTokClientOptions) {
  const tt = createTikTokClient(opts);

  return {
    tt_get_account: tool({
      description: "Get TikTok account profile info and metrics (display name, followers, bio, etc.).",
      inputSchema: z.object({
        fields: z.array(z.string()).optional().describe("Fields to fetch (default: display_name, profile_image)"),
        startDate: z.string().optional().describe("Start date for metrics (YYYY-MM-DD, max 60 days lookback)"),
        endDate: z.string().optional().describe("End date for metrics (YYYY-MM-DD)"),
      }),
      execute: async (params) => tt.account.get(params as any),
    }),

    tt_get_benchmarks: tool({
      description: "Get industry benchmarks for average likes, comments, shares, engagement rate, followers, and video views.",
      inputSchema: z.object({
        category: z.enum([
          "ART_AND_CRAFTS", "AUTOMOTIVE_AND_TRANSPORTATION", "BABY", "BEAUTY",
          "CLOTHING_AND_ACCESSORIES", "EDUCATION_AND_TRAINING", "ELECTRONICS",
          "FINANCE_AND_INVESTING", "FOOD_AND_BEVERAGE", "GAMING",
          "HEALTH_AND_WELLNESS", "HOME_FURNITURE_AND_APPLIANCES",
          "MACHINERY_AND_EQUIPMENT", "MEDIA_AND_ENTERTAINMENT", "PERSONAL_BLOG",
          "PETS", "PROFESSIONAL_SERVICES", "PUBLIC_ADMINISTRATION", "REAL_ESTATE",
          "RESTAURANTS_AND_BARS", "SHOPPING_AND_RETAIL", "SOFTWARE_AND_APPS",
          "SPORTS_FITNESS_AND_OUTDOORS", "TRAVEL_AND_TOURISM", "OTHERS",
        ]).describe("Business category"),
      }),
      execute: async ({ category }) => tt.account.getBenchmarks(category),
    }),

    tt_spark_ads_enable: tool({
      description: "Enable Spark Ads authorization on a TikTok post so advertisers can promote it.",
      inputSchema: z.object({
        itemId: z.string().describe("TikTok post ID"),
        authorizationDays: z.enum(["7", "30", "60", "180", "365"]).optional().describe("Validity period in days (default: 30)"),
      }),
      execute: async ({ itemId, authorizationDays }) =>
        tt.sparkAds.enable(itemId, authorizationDays ? Number(authorizationDays) as 7 | 30 | 60 | 180 | 365 : undefined),
    }),

    tt_spark_ads_status: tool({
      description: "Get the Spark Ads authorization status and auth code for a TikTok post.",
      inputSchema: z.object({
        itemId: z.string().describe("TikTok post ID"),
      }),
      execute: async ({ itemId }) => tt.sparkAds.getStatus(itemId),
    }),
  };
}
