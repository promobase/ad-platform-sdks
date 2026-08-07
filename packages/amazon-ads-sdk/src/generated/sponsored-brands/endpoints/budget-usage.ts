// Auto-generated client for Budget Usage — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostSbCampaignsBudgetUsageParams } from "../params.ts";

/** Budget Usage — 1 endpoints */
export function createBudgetUsageClient(api: AmazonAdsApiClient) {
  return {
    /** Budget usage API for SB campaigns */
    async postSbCampaignsBudgetUsage(params: PostSbCampaignsBudgetUsageParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/campaigns/budget/usage`, rest);
      return envelope;
    },
  };
}
