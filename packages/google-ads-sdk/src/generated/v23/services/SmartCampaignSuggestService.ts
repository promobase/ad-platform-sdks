// @generated
// fingerprint: sha256:4f52f9ea0e91b6c7719cec52fe479e1aad1c3a66ef0ac7e4c9a98454d1de6f7e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestKeywordThemesRequest, SuggestKeywordThemesResponse, SuggestSmartCampaignAdRequest, SuggestSmartCampaignAdResponse, SuggestSmartCampaignBudgetOptionsRequest, SuggestSmartCampaignBudgetOptionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.SmartCampaignSuggestService. Do not edit by hand.
export const smartCampaignSuggestService = {
  suggestSmartCampaignBudgetOptions(client: HttpClient, customerId: string, body: Omit<SuggestSmartCampaignBudgetOptionsRequest, "customerId">): Promise<SuggestSmartCampaignBudgetOptionsResponse> {
    return client.post<SuggestSmartCampaignBudgetOptionsResponse>(`/v23/customers/${customerId}:suggestSmartCampaignBudgetOptions`, body);
  },

  suggestSmartCampaignAd(client: HttpClient, customerId: string, body: Omit<SuggestSmartCampaignAdRequest, "customerId">): Promise<SuggestSmartCampaignAdResponse> {
    return client.post<SuggestSmartCampaignAdResponse>(`/v23/customers/${customerId}:suggestSmartCampaignAd`, body);
  },

  suggestKeywordThemes(client: HttpClient, customerId: string, body: Omit<SuggestKeywordThemesRequest, "customerId">): Promise<SuggestKeywordThemesResponse> {
    return client.post<SuggestKeywordThemesResponse>(`/v23/customers/${customerId}:suggestKeywordThemes`, body);
  }
};
