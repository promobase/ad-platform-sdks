import type { MoveManagerLinkRequest, MoveManagerLinkResponse, MutateCustomerManagerLinkRequest, MutateCustomerManagerLinkResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerManagerLinkService. Do not edit by hand.
export const customerManagerLinkService = {
  mutateCustomerManagerLink(client: HttpClient, customerId: string, body: Omit<MutateCustomerManagerLinkRequest, "customerId">): Promise<MutateCustomerManagerLinkResponse> {
    return client.post<MutateCustomerManagerLinkResponse>(`/v25/customers/${customerId}/customerManagerLinks:mutate`, body);
  },

  moveManagerLink(client: HttpClient, customerId: string, body: Omit<MoveManagerLinkRequest, "customerId">): Promise<MoveManagerLinkResponse> {
    return client.post<MoveManagerLinkResponse>(`/v25/customers/${customerId}/customerManagerLinks:moveManagerLink`, body);
  }
};
