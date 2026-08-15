// @generated
// fingerprint: sha256:76d940a1b7afca91b51cf82d3478aa76e69360119d8a0fcea783e2f96fab0208
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAssetsRequest, MutateAdGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupAssetService. Do not edit by hand.
export const adGroupAssetService = {
  mutateAdGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAssetsRequest, "customerId">): Promise<MutateAdGroupAssetsResponse> {
    return client.post<MutateAdGroupAssetsResponse>(`/v23/customers/${customerId}/adGroupAssets:mutate`, body);
  }
};
