import type { MutateKeywordPlanAdGroupKeywordsRequest, MutateKeywordPlanAdGroupKeywordsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanAdGroupKeywordService. Do not edit by hand.
export const keywordPlanAdGroupKeywordService = {
  mutateKeywordPlanAdGroupKeywords(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanAdGroupKeywordsRequest, "customerId">): Promise<MutateKeywordPlanAdGroupKeywordsResponse> {
    return client.post<MutateKeywordPlanAdGroupKeywordsResponse>(`/v23/customers/${customerId}/keywordPlanAdGroupKeywords:mutate`, body);
  }
};
