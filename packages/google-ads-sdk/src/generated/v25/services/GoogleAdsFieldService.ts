import type { GetGoogleAdsFieldRequest, GoogleAdsField, SearchGoogleAdsFieldsRequest, SearchGoogleAdsFieldsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.GoogleAdsFieldService. Do not edit by hand.
export const googleAdsFieldService = {
  getGoogleAdsField(client: HttpClient, resourceName: string): Promise<GoogleAdsField> {
    return client.get<GoogleAdsField>(`/v25/${resourceName}`);
  },

  searchGoogleAdsFields(client: HttpClient, body: SearchGoogleAdsFieldsRequest): Promise<SearchGoogleAdsFieldsResponse> {
    return client.post<SearchGoogleAdsFieldsResponse>(`/v25/googleAdsFields:search`, body);
  }
};
