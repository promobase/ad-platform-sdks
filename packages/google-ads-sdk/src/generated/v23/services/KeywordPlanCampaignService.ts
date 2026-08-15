// @generated
// fingerprint: sha256:7fc0683c47ca534adef955a562c5e448ea14a6570adf6ac77f2b31f727eae472
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanCampaignsRequest, MutateKeywordPlanCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanCampaignService. Do not edit by hand.
export const keywordPlanCampaignService = {
  mutateKeywordPlanCampaigns(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanCampaignsRequest, "customerId">): Promise<MutateKeywordPlanCampaignsResponse> {
    return client.post<MutateKeywordPlanCampaignsResponse>(`/v23/customers/${customerId}/keywordPlanCampaigns:mutate`, body);
  }
};
