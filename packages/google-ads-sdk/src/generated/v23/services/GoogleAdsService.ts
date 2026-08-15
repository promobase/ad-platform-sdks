// @generated
// fingerprint: sha256:8fc57f2d2e5da01d0830f6b0197437ded93975a7be8ad38511fc2c17dbcb8916
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateGoogleAdsRequest, MutateGoogleAdsResponse, SearchGoogleAdsRequest, SearchGoogleAdsResponse, SearchGoogleAdsStreamRequest, SearchGoogleAdsStreamResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GoogleAdsService. Do not edit by hand.
export const googleAdsService = {
  search(client: HttpClient, customerId: string, body: Omit<SearchGoogleAdsRequest, "customerId">): Promise<SearchGoogleAdsResponse> {
    return client.post<SearchGoogleAdsResponse>(`/v23/customers/${customerId}/googleAds:search`, body);
  },

  searchStream(client: HttpClient, customerId: string, body: Omit<SearchGoogleAdsStreamRequest, "customerId">): Promise<SearchGoogleAdsStreamResponse> {
    return client.post<SearchGoogleAdsStreamResponse>(`/v23/customers/${customerId}/googleAds:searchStream`, body);
  },

  mutate(client: HttpClient, customerId: string, body: Omit<MutateGoogleAdsRequest, "customerId">): Promise<MutateGoogleAdsResponse> {
    return client.post<MutateGoogleAdsResponse>(`/v23/customers/${customerId}/googleAds:mutate`, body);
  }
};
