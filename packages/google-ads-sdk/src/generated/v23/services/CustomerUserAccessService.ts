// @generated
// fingerprint: sha256:728cd69dea172eb65fb1d840c4c8b9b722a2819fa27d4622c7b560cbbf1c0e6b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerUserAccessRequest, MutateCustomerUserAccessResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerUserAccessService. Do not edit by hand.
export const customerUserAccessService = {
  mutateCustomerUserAccess(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessRequest, "customerId">): Promise<MutateCustomerUserAccessResponse> {
    return client.post<MutateCustomerUserAccessResponse>(`/v23/customers/${customerId}/customerUserAccesses:mutate`, body);
  }
};
