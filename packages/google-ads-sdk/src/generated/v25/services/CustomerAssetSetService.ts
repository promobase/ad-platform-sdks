// @generated
// fingerprint: sha256:d5c71ec25bf91f14559b126774f20587480986c7100e7eb6385b01d42f9b52c7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerAssetSetsRequest, MutateCustomerAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerAssetSetService. Do not edit by hand.
export const customerAssetSetService = {
  mutateCustomerAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetSetsRequest, "customerId">): Promise<MutateCustomerAssetSetsResponse> {
    return client.post<MutateCustomerAssetSetsResponse>(`/v25/customers/${customerId}/customerAssetSets:mutate`, body);
  }
};
