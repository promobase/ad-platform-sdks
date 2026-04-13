import type { MutateAdGroupBidModifiersRequest, MutateAdGroupBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupBidModifierService. Do not edit by hand.
export const adGroupBidModifierService = {
  mutateAdGroupBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupBidModifiersRequest, "customerId">): Promise<MutateAdGroupBidModifiersResponse> {
    return client.post<MutateAdGroupBidModifiersResponse>(`/v23/customers/${customerId}/adGroupBidModifiers:mutate`, body);
  }
};
