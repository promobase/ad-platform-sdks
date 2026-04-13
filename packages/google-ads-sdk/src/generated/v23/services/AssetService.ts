import type { MutateAssetsRequest, MutateAssetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetService. Do not edit by hand.
export const assetService = {
  mutateAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetsRequest, "customerId">): Promise<MutateAssetsResponse> {
    return client.post<MutateAssetsResponse>(`/v23/customers/${customerId}/assets:mutate`, body);
  }
};
