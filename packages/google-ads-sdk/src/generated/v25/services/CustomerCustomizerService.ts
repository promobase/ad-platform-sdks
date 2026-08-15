// @generated
// fingerprint: sha256:5b5a7b25ddd428dc9ab4ead29f75580cc9f01790a01cbfaa4a104cc6440ff7cc
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerCustomizersRequest, MutateCustomerCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerCustomizerService. Do not edit by hand.
export const customerCustomizerService = {
  mutateCustomerCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCustomerCustomizersRequest, "customerId">): Promise<MutateCustomerCustomizersResponse> {
    return client.post<MutateCustomerCustomizersResponse>(`/v25/customers/${customerId}/CustomerCustomizers:mutate`, body);
  }
};
