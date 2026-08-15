// @generated
// fingerprint: sha256:c4150067291887bee993c7ce5a43c9ba4fa0e22daea95c1276a2bd455980c4e8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerAssetsRequest, MutateCustomerAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerAssetService. Do not edit by hand.
export const customerAssetService = {
  mutateCustomerAssets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetsRequest, "customerId">): Promise<MutateCustomerAssetsResponse> {
    return client.post<MutateCustomerAssetsResponse>(`/v23/customers/${customerId}/customerAssets:mutate`, body);
  }
};
