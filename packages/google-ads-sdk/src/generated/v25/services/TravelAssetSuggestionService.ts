// @generated
// fingerprint: sha256:d57f24d646f85ef7895eeeed89770a7fe04279474ff2bd28b406238e53f72ae5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestTravelAssetsRequest, SuggestTravelAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.TravelAssetSuggestionService. Do not edit by hand.
export const travelAssetSuggestionService = {
  suggestTravelAssets(client: HttpClient, customerId: string, body: Omit<SuggestTravelAssetsRequest, "customerId">): Promise<SuggestTravelAssetsResponse> {
    return client.post<SuggestTravelAssetsResponse>(`/v25/customers/${customerId}:suggestTravelAssets`, body);
  }
};
