import type { MutateAdGroupBidModifiersRequest, MutateAdGroupBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupBidModifierService. Do not edit by hand.
export const adGroupBidModifierService = {
  mutateAdGroupBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupBidModifiersRequest, "customerId">): Promise<MutateAdGroupBidModifiersResponse> {
    return client.post<MutateAdGroupBidModifiersResponse>(`/v25/customers/${customerId}/adGroupBidModifiers:mutate`, body);
  }
};
