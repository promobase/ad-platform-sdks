// @generated
// fingerprint: sha256:ed6625d2b428d93f578c12aa1f04614b70456787f0f4407212fa67f4cf6915e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanAdGroupKeywordsRequest, MutateKeywordPlanAdGroupKeywordsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanAdGroupKeywordService. Do not edit by hand.
export const keywordPlanAdGroupKeywordService = {
  mutateKeywordPlanAdGroupKeywords(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanAdGroupKeywordsRequest, "customerId">): Promise<MutateKeywordPlanAdGroupKeywordsResponse> {
    return client.post<MutateKeywordPlanAdGroupKeywordsResponse>(`/v23/customers/${customerId}/keywordPlanAdGroupKeywords:mutate`, body);
  }
};
