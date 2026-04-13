import type { MutateAssetGroupAssetsRequest, MutateAssetGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupAssetService. Do not edit by hand.
export const assetGroupAssetService = {
  mutateAssetGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupAssetsRequest, "customerId">): Promise<MutateAssetGroupAssetsResponse> {
    return client.post<MutateAssetGroupAssetsResponse>(`/v23/customers/${customerId}/assetGroupAssets:mutate`, body);
  }
};
