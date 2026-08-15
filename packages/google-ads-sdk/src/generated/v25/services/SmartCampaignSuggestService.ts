// @generated
// fingerprint: sha256:5ba5b7e2407baa3fdc020c3bede192de0b8c4a24db267d27e9edd0bd6860e8d1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestKeywordThemesRequest, SuggestKeywordThemesResponse, SuggestSmartCampaignAdRequest, SuggestSmartCampaignAdResponse, SuggestSmartCampaignBudgetOptionsRequest, SuggestSmartCampaignBudgetOptionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.SmartCampaignSuggestService. Do not edit by hand.
export const smartCampaignSuggestService = {
  suggestSmartCampaignBudgetOptions(client: HttpClient, customerId: string, body: Omit<SuggestSmartCampaignBudgetOptionsRequest, "customerId">): Promise<SuggestSmartCampaignBudgetOptionsResponse> {
    return client.post<SuggestSmartCampaignBudgetOptionsResponse>(`/v25/customers/${customerId}:suggestSmartCampaignBudgetOptions`, body);
  },

  suggestSmartCampaignAd(client: HttpClient, customerId: string, body: Omit<SuggestSmartCampaignAdRequest, "customerId">): Promise<SuggestSmartCampaignAdResponse> {
    return client.post<SuggestSmartCampaignAdResponse>(`/v25/customers/${customerId}:suggestSmartCampaignAd`, body);
  },

  suggestKeywordThemes(client: HttpClient, customerId: string, body: Omit<SuggestKeywordThemesRequest, "customerId">): Promise<SuggestKeywordThemesResponse> {
    return client.post<SuggestKeywordThemesResponse>(`/v25/customers/${customerId}:suggestKeywordThemes`, body);
  }
};
