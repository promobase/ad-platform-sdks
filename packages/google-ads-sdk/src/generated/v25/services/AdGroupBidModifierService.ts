// @generated
// fingerprint: sha256:d7fe47cb0baf87e52d53da5e00eba0ec44af734afd4521622427b9f9a6342716
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupBidModifiersRequest, MutateAdGroupBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupBidModifierService. Do not edit by hand.
export const adGroupBidModifierService = {
  mutateAdGroupBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupBidModifiersRequest, "customerId">): Promise<MutateAdGroupBidModifiersResponse> {
    return client.post<MutateAdGroupBidModifiersResponse>(`/v25/customers/${customerId}/adGroupBidModifiers:mutate`, body);
  }
};
