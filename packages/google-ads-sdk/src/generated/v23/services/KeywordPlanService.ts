// @generated
// fingerprint: sha256:43a970fd31658953d0e7936b07bd3a37bdf01d2878e8a3f56378cb6050f7ed6c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlansRequest, MutateKeywordPlansResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanService. Do not edit by hand.
export const keywordPlanService = {
  mutateKeywordPlans(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlansRequest, "customerId">): Promise<MutateKeywordPlansResponse> {
    return client.post<MutateKeywordPlansResponse>(`/v23/customers/${customerId}/keywordPlans:mutate`, body);
  }
};
