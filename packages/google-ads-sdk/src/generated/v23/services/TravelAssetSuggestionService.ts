// @generated
// fingerprint: sha256:974c0fd9e0e1cfaed5bf31ed3951fcff3907e1cc91a48115a87f79ad1ff4f3b7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestTravelAssetsRequest, SuggestTravelAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.TravelAssetSuggestionService. Do not edit by hand.
export const travelAssetSuggestionService = {
  suggestTravelAssets(client: HttpClient, customerId: string, body: Omit<SuggestTravelAssetsRequest, "customerId">): Promise<SuggestTravelAssetsResponse> {
    return client.post<SuggestTravelAssetsResponse>(`/v23/customers/${customerId}:suggestTravelAssets`, body);
  }
};
