import type { MutateAdGroupAssetsRequest, MutateAdGroupAssetsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupAssetService. Do not edit by hand.
export const adGroupAssetService = {
  mutateAdGroupAssets(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAssetsRequest, "customerId">): Promise<MutateAdGroupAssetsResponse> {
    return client.post<MutateAdGroupAssetsResponse>(`/v25/customers/${customerId}/adGroupAssets:mutate`, body);
  }
};
