// @generated
// fingerprint: sha256:5a520e787e8c24821104dadfcc40e85953f48c1d6d28a26b7a3629fb7b55c535
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomizerAttributesRequest, MutateCustomizerAttributesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomizerAttributeService. Do not edit by hand.
export const customizerAttributeService = {
  mutateCustomizerAttributes(client: HttpClient, customerId: string, body: Omit<MutateCustomizerAttributesRequest, "customerId">): Promise<MutateCustomizerAttributesResponse> {
    return client.post<MutateCustomizerAttributesResponse>(`/v23/customers/${customerId}/customizerAttributes:mutate`, body);
  }
};
