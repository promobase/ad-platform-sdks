// @generated
// fingerprint: sha256:78406905cf990209af23e23669531f9e00aa314d815fb7882c64f51903fda58b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateGoogleAdsRequest, MutateGoogleAdsResponse, SearchGoogleAdsRequest, SearchGoogleAdsResponse, SearchGoogleAdsStreamRequest, SearchGoogleAdsStreamResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.GoogleAdsService. Do not edit by hand.
export const googleAdsService = {
  search(client: HttpClient, customerId: string, body: Omit<SearchGoogleAdsRequest, "customerId">): Promise<SearchGoogleAdsResponse> {
    return client.post<SearchGoogleAdsResponse>(`/v25/customers/${customerId}/googleAds:search`, body);
  },

  searchStream(client: HttpClient, customerId: string, body: Omit<SearchGoogleAdsStreamRequest, "customerId">): Promise<SearchGoogleAdsStreamResponse> {
    return client.post<SearchGoogleAdsStreamResponse>(`/v25/customers/${customerId}/googleAds:searchStream`, body);
  },

  mutate(client: HttpClient, customerId: string, body: Omit<MutateGoogleAdsRequest, "customerId">): Promise<MutateGoogleAdsResponse> {
    return client.post<MutateGoogleAdsResponse>(`/v25/customers/${customerId}/googleAds:mutate`, body);
  }
};
