// @generated
// fingerprint: sha256:e64e84e4fb6a7b4fdb19371ffa5512d19b95eb6378c7d03fab8b4f01dff3d1c6
// DO NOT EDIT: generated file; changes will be overwritten.
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
