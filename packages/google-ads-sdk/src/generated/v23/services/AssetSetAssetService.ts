// @generated
// fingerprint: sha256:1ab0d6f8239d0efaf41a16a526566eb216e46f4e4b7de50913ead3e181d04663
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetSetAssetsRequest, MutateAssetSetAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetSetAssetService. Do not edit by hand.
export const assetSetAssetService = {
  mutateAssetSetAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetSetAssetsRequest, "customerId">): Promise<MutateAssetSetAssetsResponse> {
    return client.post<MutateAssetSetAssetsResponse>(`/v23/customers/${customerId}/assetSetAssets:mutate`, body);
  }
};
