import type { MutateAdsRequest, MutateAdsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdService. Do not edit by hand.
export const adService = {
  mutateAds(client: HttpClient, customerId: string, body: Omit<MutateAdsRequest, "customerId">): Promise<MutateAdsResponse> {
    return client.post<MutateAdsResponse>(`/v23/customers/${customerId}/ads:mutate`, body);
  }
};
