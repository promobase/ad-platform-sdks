import type { MutateAssetsRequest, MutateAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetService. Do not edit by hand.
export const assetService = {
  mutateAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetsRequest, "customerId">): Promise<MutateAssetsResponse> {
    return client.post<MutateAssetsResponse>(`/v25/customers/${customerId}/assets:mutate`, body);
  }
};
