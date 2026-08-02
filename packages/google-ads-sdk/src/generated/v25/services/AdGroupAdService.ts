import type { MutateAdGroupAdsRequest, MutateAdGroupAdsResponse, RemoveAutomaticallyCreatedAssetsRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupAdService. Do not edit by hand.
export const adGroupAdService = {
  mutateAdGroupAds(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAdsRequest, "customerId">): Promise<MutateAdGroupAdsResponse> {
    return client.post<MutateAdGroupAdsResponse>(`/v25/customers/${customerId}/adGroupAds:mutate`, body);
  },

  removeAutomaticallyCreatedAssets(client: HttpClient, adGroupAd: string, body: Omit<RemoveAutomaticallyCreatedAssetsRequest, "adGroupAd">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v25/${adGroupAd}:removeAutomaticallyCreatedAssets`, body);
  }
};
