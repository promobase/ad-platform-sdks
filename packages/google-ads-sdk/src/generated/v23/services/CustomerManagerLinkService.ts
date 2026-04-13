import type { MoveManagerLinkRequest, MoveManagerLinkResponse, MutateCustomerManagerLinkRequest, MutateCustomerManagerLinkResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerManagerLinkService. Do not edit by hand.
export const customerManagerLinkService = {
  mutateCustomerManagerLink(client: HttpClient, customerId: string, body: Omit<MutateCustomerManagerLinkRequest, "customerId">): Promise<MutateCustomerManagerLinkResponse> {
    return client.post<MutateCustomerManagerLinkResponse>(`/v23/customers/${customerId}/customerManagerLinks:mutate`, body);
  },

  moveManagerLink(client: HttpClient, customerId: string, body: Omit<MoveManagerLinkRequest, "customerId">): Promise<MoveManagerLinkResponse> {
    return client.post<MoveManagerLinkResponse>(`/v23/customers/${customerId}/customerManagerLinks:moveManagerLink`, body);
  }
};
