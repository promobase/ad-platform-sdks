// @generated
// fingerprint: sha256:425c48afc35895f7c243ef651afcdd14c2fd341cab6bd2c2b51f22b030fbcc9c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupAssetService. Do not edit by hand.
export const assetGroupAssetService = {
  mutateAssetGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupAssetsRequest, "customerId">): Promise<MutateAssetGroupAssetsResponse> {
    return client.post<MutateAssetGroupAssetsResponse>(`/v25/customers/${customerId}/assetGroupAssets:mutate`, body);
  }
};
