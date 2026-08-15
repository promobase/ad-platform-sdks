// @generated
// fingerprint: sha256:fb7dda219c7d90df84252dcf7de49ebe29067c33daf0e2cbc271a087b7d288f8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAdsRequest, MutateAdGroupAdsResponse, RemoveAutomaticallyCreatedAssetsRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupAdService. Do not edit by hand.
export const adGroupAdService = {
  mutateAdGroupAds(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAdsRequest, "customerId">): Promise<MutateAdGroupAdsResponse> {
    return client.post<MutateAdGroupAdsResponse>(`/v23/customers/${customerId}/adGroupAds:mutate`, body);
  },

  removeAutomaticallyCreatedAssets(client: HttpClient, adGroupAd: string, body: Omit<RemoveAutomaticallyCreatedAssetsRequest, "adGroupAd">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v23/${adGroupAd}:removeAutomaticallyCreatedAssets`, body);
  }
};
