// @generated
// fingerprint: sha256:b70b28e728a96b7be7cbdc4dceb54129270275310ec611b71070e086add0881d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerAssetsRequest, MutateCustomerAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerAssetService. Do not edit by hand.
export const customerAssetService = {
  mutateCustomerAssets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetsRequest, "customerId">): Promise<MutateCustomerAssetsResponse> {
    return client.post<MutateCustomerAssetsResponse>(`/v25/customers/${customerId}/customerAssets:mutate`, body);
  }
};
