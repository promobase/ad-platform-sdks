import type { SuggestTravelAssetsRequest, SuggestTravelAssetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.TravelAssetSuggestionService. Do not edit by hand.
export const travelAssetSuggestionService = {
  suggestTravelAssets(client: HttpClient, customerId: string, body: Omit<SuggestTravelAssetsRequest, "customerId">): Promise<SuggestTravelAssetsResponse> {
    return client.post<SuggestTravelAssetsResponse>(`/v23/customers/${customerId}:suggestTravelAssets`, body);
  }
};
