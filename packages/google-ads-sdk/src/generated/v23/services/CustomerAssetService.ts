import type { MutateCustomerAssetsRequest, MutateCustomerAssetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerAssetService. Do not edit by hand.
export const customerAssetService = {
  mutateCustomerAssets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetsRequest, "customerId">): Promise<MutateCustomerAssetsResponse> {
    return client.post<MutateCustomerAssetsResponse>(`/v23/customers/${customerId}/customerAssets:mutate`, body);
  }
};
