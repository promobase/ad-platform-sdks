import type { MutateAssetSetsRequest, MutateAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetSetService. Do not edit by hand.
export const assetSetService = {
  mutateAssetSets(client: HttpClient, customerId: string, body: Omit<MutateAssetSetsRequest, "customerId">): Promise<MutateAssetSetsResponse> {
    return client.post<MutateAssetSetsResponse>(`/v23/customers/${customerId}/assetSets:mutate`, body);
  }
};
