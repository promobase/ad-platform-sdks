// @generated
// fingerprint: sha256:c3aa0336e85d52deecc74d866abb0d1b4d5d3852260a3a621a9b4776f99c6b53
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdsRequest, MutateAdsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdService. Do not edit by hand.
export const adService = {
  mutateAds(client: HttpClient, customerId: string, body: Omit<MutateAdsRequest, "customerId">): Promise<MutateAdsResponse> {
    return client.post<MutateAdsResponse>(`/v25/customers/${customerId}/ads:mutate`, body);
  }
};
