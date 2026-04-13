import type { MutateCustomerClientLinkRequest, MutateCustomerClientLinkResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerClientLinkService. Do not edit by hand.
export const customerClientLinkService = {
  mutateCustomerClientLink(client: HttpClient, customerId: string, body: Omit<MutateCustomerClientLinkRequest, "customerId">): Promise<MutateCustomerClientLinkResponse> {
    return client.post<MutateCustomerClientLinkResponse>(`/v23/customers/${customerId}/customerClientLinks:mutate`, body);
  }
};
