import type { SuggestKeywordThemesRequest, SuggestKeywordThemesResponse, SuggestSmartCampaignAdRequest, SuggestSmartCampaignAdResponse, SuggestSmartCampaignBudgetOptionsRequest, SuggestSmartCampaignBudgetOptionsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

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
