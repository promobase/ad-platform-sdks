// @generated
// fingerprint: sha256:5112adc1c58d04270ac43aa2bdde6feb8758951d84aac21e77b581323951cf66
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupBidModifiersRequest, MutateAdGroupBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupBidModifierService. Do not edit by hand.
export const adGroupBidModifierService = {
  mutateAdGroupBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupBidModifiersRequest, "customerId">): Promise<MutateAdGroupBidModifiersResponse> {
    return client.post<MutateAdGroupBidModifiersResponse>(`/v23/customers/${customerId}/adGroupBidModifiers:mutate`, body);
  }
};
