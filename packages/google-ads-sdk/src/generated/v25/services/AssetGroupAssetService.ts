import type { MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupAssetService. Do not edit by hand.
export const assetGroupAssetService = {
  mutateAssetGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupAssetsRequest, "customerId">): Promise<MutateAssetGroupAssetsResponse> {
    return client.post<MutateAssetGroupAssetsResponse>(`/v25/customers/${customerId}/assetGroupAssets:mutate`, body);
  }
};
