// @generated
// fingerprint: sha256:16eb4e1492bd6f4b467a91fc1d02233ae1f4cae18163bfd5ae4fd827af61030f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAssetsRequest, MutateAdGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupAssetService. Do not edit by hand.
export const adGroupAssetService = {
  mutateAdGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAssetsRequest, "customerId">): Promise<MutateAdGroupAssetsResponse> {
    return client.post<MutateAdGroupAssetsResponse>(`/v25/customers/${customerId}/adGroupAssets:mutate`, body);
  }
};
