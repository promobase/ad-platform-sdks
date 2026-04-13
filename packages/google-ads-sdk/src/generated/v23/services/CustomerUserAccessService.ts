import type { MutateCustomerUserAccessRequest, MutateCustomerUserAccessResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerUserAccessService. Do not edit by hand.
export const customerUserAccessService = {
  mutateCustomerUserAccess(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessRequest, "customerId">): Promise<MutateCustomerUserAccessResponse> {
    return client.post<MutateCustomerUserAccessResponse>(`/v23/customers/${customerId}/customerUserAccesses:mutate`, body);
  }
};
