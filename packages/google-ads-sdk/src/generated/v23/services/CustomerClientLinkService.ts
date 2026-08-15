// @generated
// fingerprint: sha256:896894b4fef0aaeb2508d0ff7de2af8f01994687215ccb397f4321b02df7d0c0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerClientLinkService. Do not edit by hand.
export const customerClientLinkService = {
  mutateCustomerClientLink(client: HttpClient, customerId: string, body: Omit<MutateCustomerClientLinkRequest, "customerId">): Promise<MutateCustomerClientLinkResponse> {
    return client.post<MutateCustomerClientLinkResponse>(`/v23/customers/${customerId}/customerClientLinks:mutate`, body);
  }
};
