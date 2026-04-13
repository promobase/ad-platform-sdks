import type { MutateGoogleAdsRequest, MutateGoogleAdsResponse, SearchGoogleAdsRequest, SearchGoogleAdsResponse, SearchGoogleAdsStreamRequest, SearchGoogleAdsStreamResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

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
