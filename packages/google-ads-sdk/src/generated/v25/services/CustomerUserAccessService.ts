// @generated
// fingerprint: sha256:fb189a808d57ca6bb56ebb11a70bc005c088f8744a1f677a447054ae0936161a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerUserAccessRequest, MutateCustomerUserAccessResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerUserAccessService. Do not edit by hand.
export const customerUserAccessService = {
  mutateCustomerUserAccess(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessRequest, "customerId">): Promise<MutateCustomerUserAccessResponse> {
    return client.post<MutateCustomerUserAccessResponse>(`/v25/customers/${customerId}/customerUserAccesses:mutate`, body);
  }
};
