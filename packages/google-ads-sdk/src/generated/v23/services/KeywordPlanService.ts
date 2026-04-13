import type { MutateKeywordPlansRequest, MutateKeywordPlansResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanService. Do not edit by hand.
export const keywordPlanService = {
  mutateKeywordPlans(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlansRequest, "customerId">): Promise<MutateKeywordPlansResponse> {
    return client.post<MutateKeywordPlansResponse>(`/v23/customers/${customerId}/keywordPlans:mutate`, body);
  }
};
