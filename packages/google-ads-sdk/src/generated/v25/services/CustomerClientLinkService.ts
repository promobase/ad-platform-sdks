// @generated
// fingerprint: sha256:cad12c9b6c94d26b3a9c733ade25c49b1a3181ba4a23f2558e8ef3c5eefa35df
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerClientLinkService. Do not edit by hand.
export const customerClientLinkService = {
  mutateCustomerClientLink(client: HttpClient, customerId: string, body: Omit<MutateCustomerClientLinkRequest, "customerId">): Promise<MutateCustomerClientLinkResponse> {
    return client.post<MutateCustomerClientLinkResponse>(`/v25/customers/${customerId}/customerClientLinks:mutate`, body);
  }
};
