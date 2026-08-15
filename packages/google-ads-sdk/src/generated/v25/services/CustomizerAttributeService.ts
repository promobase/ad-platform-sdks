// @generated
// fingerprint: sha256:23e761531f1d223e583603b00ebc52c9814db4c31cd0d5c74e12d5e48f9cde5a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomizerAttributesRequest, MutateCustomizerAttributesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomizerAttributeService. Do not edit by hand.
export const customizerAttributeService = {
  mutateCustomizerAttributes(client: HttpClient, customerId: string, body: Omit<MutateCustomizerAttributesRequest, "customerId">): Promise<MutateCustomizerAttributesResponse> {
    return client.post<MutateCustomizerAttributesResponse>(`/v25/customers/${customerId}/customizerAttributes:mutate`, body);
  }
};
