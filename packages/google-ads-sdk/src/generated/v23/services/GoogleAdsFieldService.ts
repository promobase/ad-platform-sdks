// @generated
// fingerprint: sha256:5f3f3b411e84eda3dc8f0f24b34bb04f4dd604d7b2a63ede0c48ef89decbd732
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GetGoogleAdsFieldRequest, GoogleAdsField, SearchGoogleAdsFieldsRequest, SearchGoogleAdsFieldsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GoogleAdsFieldService. Do not edit by hand.
export const googleAdsFieldService = {
  getGoogleAdsField(client: HttpClient, resourceName: string): Promise<GoogleAdsField> {
    return client.get<GoogleAdsField>(`/v23/${resourceName}`);
  },

  searchGoogleAdsFields(client: HttpClient, body: SearchGoogleAdsFieldsRequest): Promise<SearchGoogleAdsFieldsResponse> {
    return client.post<SearchGoogleAdsFieldsResponse>(`/v23/googleAdsFields:search`, body);
  }
};
