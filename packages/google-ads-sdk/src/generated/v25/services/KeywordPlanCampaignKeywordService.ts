// @generated
// fingerprint: sha256:d1c0a52f03b83dfdafcfed44a8ad226d93924fc5da8f1d2566c49173946605db
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanCampaignKeywordsRequest, MutateKeywordPlanCampaignKeywordsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordPlanCampaignKeywordService. Do not edit by hand.
export const keywordPlanCampaignKeywordService = {
  mutateKeywordPlanCampaignKeywords(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanCampaignKeywordsRequest, "customerId">): Promise<MutateKeywordPlanCampaignKeywordsResponse> {
    return client.post<MutateKeywordPlanCampaignKeywordsResponse>(`/v25/customers/${customerId}/keywordPlanCampaignKeywords:mutate`, body);
  }
};
