// @generated
// fingerprint: sha256:c1d1f6e7996ef9b2d566447f1dd9cc8ab63d682f838a875beb418db1188eb279
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Budget Usage — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostSdCampaignsBudgetUsageParams } from "../params.ts";

/** Budget Usage — 1 endpoints */
export function createBudgetUsageClient(api: AmazonAdsApiClient) {
  return {
    /** Budget usage API for SD campaigns */
    async postSdCampaignsBudgetUsage(params: PostSdCampaignsBudgetUsageParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sd/campaigns/budget/usage`, rest);
      return envelope;
    },
  };
}
