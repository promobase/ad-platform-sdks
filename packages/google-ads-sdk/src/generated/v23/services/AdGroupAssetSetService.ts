import type { MutateAdGroupAssetSetsRequest, MutateAdGroupAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupAssetSetService. Do not edit by hand.
export const adGroupAssetSetService = {
  mutateAdGroupAssetSets(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAssetSetsRequest, "customerId">): Promise<MutateAdGroupAssetSetsResponse> {
    return client.post<MutateAdGroupAssetSetsResponse>(`/v23/customers/${customerId}/adGroupAssetSets:mutate`, body);
  }
};
