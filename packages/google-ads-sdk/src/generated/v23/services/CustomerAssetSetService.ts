// @generated
// fingerprint: sha256:8c35b8de65b385a396990ab29881a2963c17beed5a69c327e1e065011d241cea
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerAssetSetsRequest, MutateCustomerAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerAssetSetService. Do not edit by hand.
export const customerAssetSetService = {
  mutateCustomerAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetSetsRequest, "customerId">): Promise<MutateCustomerAssetSetsResponse> {
    return client.post<MutateCustomerAssetSetsResponse>(`/v23/customers/${customerId}/customerAssetSets:mutate`, body);
  }
};
