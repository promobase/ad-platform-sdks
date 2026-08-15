// @generated
// fingerprint: sha256:b9f22639d11cfd38ec5106ec0c9836417adc5f9ffcf11daf556d9a00d636a4b4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetSetAssetsRequest, MutateAssetSetAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetSetAssetService. Do not edit by hand.
export const assetSetAssetService = {
  mutateAssetSetAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetSetAssetsRequest, "customerId">): Promise<MutateAssetSetAssetsResponse> {
    return client.post<MutateAssetSetAssetsResponse>(`/v25/customers/${customerId}/assetSetAssets:mutate`, body);
  }
};
