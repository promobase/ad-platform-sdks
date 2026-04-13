import type { MutateAssetSetAssetsRequest, MutateAssetSetAssetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetSetAssetService. Do not edit by hand.
export const assetSetAssetService = {
  mutateAssetSetAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetSetAssetsRequest, "customerId">): Promise<MutateAssetSetAssetsResponse> {
    return client.post<MutateAssetSetAssetsResponse>(`/v23/customers/${customerId}/assetSetAssets:mutate`, body);
  }
};
