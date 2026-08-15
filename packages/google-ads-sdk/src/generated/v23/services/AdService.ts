// @generated
// fingerprint: sha256:94151e42cada6ad4240b0bcf489b9c13184cbcd78830b4f955a5fd4c8e64564c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdsRequest, MutateAdsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdService. Do not edit by hand.
export const adService = {
  mutateAds(client: HttpClient, customerId: string, body: Omit<MutateAdsRequest, "customerId">): Promise<MutateAdsResponse> {
    return client.post<MutateAdsResponse>(`/v23/customers/${customerId}/ads:mutate`, body);
  }
};
