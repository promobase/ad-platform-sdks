// @generated
// fingerprint: sha256:2ca05d218f1f8e1729575063ee028f96a30b1008a4c119be49ca1fbf8aaaffe3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupAssetService. Do not edit by hand.
export const assetGroupAssetService = {
  mutateAssetGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupAssetsRequest, "customerId">): Promise<MutateAssetGroupAssetsResponse> {
    return client.post<MutateAssetGroupAssetsResponse>(`/v23/customers/${customerId}/assetGroupAssets:mutate`, body);
  }
};
