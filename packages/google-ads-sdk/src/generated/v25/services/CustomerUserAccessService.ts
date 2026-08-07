import type { MutateCustomerUserAccessRequest, MutateCustomerUserAccessResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerUserAccessService. Do not edit by hand.
export const customerUserAccessService = {
  mutateCustomerUserAccess(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessRequest, "customerId">): Promise<MutateCustomerUserAccessResponse> {
    return client.post<MutateCustomerUserAccessResponse>(`/v25/customers/${customerId}/customerUserAccesses:mutate`, body);
  }
};
