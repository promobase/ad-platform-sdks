// @generated
// fingerprint: sha256:8450bfa751cc05966d57af0ac899f26fba9b39006d31cd10e0c32d5baf870fea
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanAdGroupKeywordsRequest, MutateKeywordPlanAdGroupKeywordsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordPlanAdGroupKeywordService. Do not edit by hand.
export const keywordPlanAdGroupKeywordService = {
  mutateKeywordPlanAdGroupKeywords(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanAdGroupKeywordsRequest, "customerId">): Promise<MutateKeywordPlanAdGroupKeywordsResponse> {
    return client.post<MutateKeywordPlanAdGroupKeywordsResponse>(`/v25/customers/${customerId}/keywordPlanAdGroupKeywords:mutate`, body);
  }
};
