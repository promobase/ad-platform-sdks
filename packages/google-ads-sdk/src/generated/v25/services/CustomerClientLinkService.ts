import type { MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerClientLinkService. Do not edit by hand.
export const customerClientLinkService = {
  mutateCustomerClientLink(client: HttpClient, customerId: string, body: Omit<MutateCustomerClientLinkRequest, "customerId">): Promise<MutateCustomerClientLinkResponse> {
    return client.post<MutateCustomerClientLinkResponse>(`/v25/customers/${customerId}/customerClientLinks:mutate`, body);
  }
};
