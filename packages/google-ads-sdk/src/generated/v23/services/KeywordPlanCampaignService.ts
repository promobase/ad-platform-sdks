import type { MutateKeywordPlanCampaignsRequest, MutateKeywordPlanCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanCampaignService. Do not edit by hand.
export const keywordPlanCampaignService = {
  mutateKeywordPlanCampaigns(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanCampaignsRequest, "customerId">): Promise<MutateKeywordPlanCampaignsResponse> {
    return client.post<MutateKeywordPlanCampaignsResponse>(`/v23/customers/${customerId}/keywordPlanCampaigns:mutate`, body);
  }
};
