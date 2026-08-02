import type { MutateCustomerAssetsRequest, MutateCustomerAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerAssetService. Do not edit by hand.
export const customerAssetService = {
  mutateCustomerAssets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetsRequest, "customerId">): Promise<MutateCustomerAssetsResponse> {
    return client.post<MutateCustomerAssetsResponse>(`/v25/customers/${customerId}/customerAssets:mutate`, body);
  }
};
