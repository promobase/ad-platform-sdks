// @generated
// fingerprint: sha256:ee830739eaaeffab7da5b12c326deb0341522dea35d8a082e099e5471b26b51e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanCampaignKeywordsRequest, MutateKeywordPlanCampaignKeywordsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanCampaignKeywordService. Do not edit by hand.
export const keywordPlanCampaignKeywordService = {
  mutateKeywordPlanCampaignKeywords(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanCampaignKeywordsRequest, "customerId">): Promise<MutateKeywordPlanCampaignKeywordsResponse> {
    return client.post<MutateKeywordPlanCampaignKeywordsResponse>(`/v23/customers/${customerId}/keywordPlanCampaignKeywords:mutate`, body);
  }
};
