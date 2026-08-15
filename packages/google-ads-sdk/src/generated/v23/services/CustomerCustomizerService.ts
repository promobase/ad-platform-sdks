// @generated
// fingerprint: sha256:a5f26cbc44d16d83e9e6a25f5911d4c58c9e4bca1a8806f9a208253be5294729
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerCustomizersRequest, MutateCustomerCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerCustomizerService. Do not edit by hand.
export const customerCustomizerService = {
  mutateCustomerCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCustomerCustomizersRequest, "customerId">): Promise<MutateCustomerCustomizersResponse> {
    return client.post<MutateCustomerCustomizersResponse>(`/v23/customers/${customerId}/CustomerCustomizers:mutate`, body);
  }
};
