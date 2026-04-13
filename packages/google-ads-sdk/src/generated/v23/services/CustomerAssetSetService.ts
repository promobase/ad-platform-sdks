import type { MutateCustomerAssetSetsRequest, MutateCustomerAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerAssetSetService. Do not edit by hand.
export const customerAssetSetService = {
  mutateCustomerAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCustomerAssetSetsRequest, "customerId">): Promise<MutateCustomerAssetSetsResponse> {
    return client.post<MutateCustomerAssetSetsResponse>(`/v23/customers/${customerId}/customerAssetSets:mutate`, body);
  }
};
