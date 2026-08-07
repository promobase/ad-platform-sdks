// Auto-generated client for Budget Usage — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostSpCampaignsBudgetUsageParams } from "../params.ts";

/** Budget Usage — 1 endpoints */
export function createBudgetUsageClient(api: AmazonAdsApiClient) {
  return {
    /** Budget usage API for SP campaigns */
    async postSpCampaignsBudgetUsage(params: PostSpCampaignsBudgetUsageParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaigns/budget/usage`, rest);
      return envelope;
    },
  };
}
