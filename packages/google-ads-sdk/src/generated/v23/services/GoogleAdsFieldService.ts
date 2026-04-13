import type { GetGoogleAdsFieldRequest, GoogleAdsField, SearchGoogleAdsFieldsRequest, SearchGoogleAdsFieldsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GoogleAdsFieldService. Do not edit by hand.
export const googleAdsFieldService = {
  getGoogleAdsField(client: HttpClient, resourceName: string): Promise<GoogleAdsField> {
    return client.get<GoogleAdsField>(`/v23/${resourceName}`);
  },

  searchGoogleAdsFields(client: HttpClient, body: SearchGoogleAdsFieldsRequest): Promise<SearchGoogleAdsFieldsResponse> {
    return client.post<SearchGoogleAdsFieldsResponse>(`/v23/googleAdsFields:search`, body);
  }
};
