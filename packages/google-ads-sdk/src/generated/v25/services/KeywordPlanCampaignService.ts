// @generated
// fingerprint: sha256:f0941f35b26fc8004b61a4a1f32b2dba9a2eb9f40f2c419439bba926fc9670d8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanCampaignsRequest, MutateKeywordPlanCampaignsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordPlanCampaignService. Do not edit by hand.
export const keywordPlanCampaignService = {
  mutateKeywordPlanCampaigns(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanCampaignsRequest, "customerId">): Promise<MutateKeywordPlanCampaignsResponse> {
    return client.post<MutateKeywordPlanCampaignsResponse>(`/v25/customers/${customerId}/keywordPlanCampaigns:mutate`, body);
  }
};
