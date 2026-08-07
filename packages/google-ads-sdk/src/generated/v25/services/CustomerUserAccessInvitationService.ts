import type { MutateCustomerUserAccessInvitationRequest, MutateCustomerUserAccessInvitationResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerUserAccessInvitationService. Do not edit by hand.
export const customerUserAccessInvitationService = {
  mutateCustomerUserAccessInvitation(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessInvitationRequest, "customerId">): Promise<MutateCustomerUserAccessInvitationResponse> {
    return client.post<MutateCustomerUserAccessInvitationResponse>(`/v25/customers/${customerId}/customerUserAccessInvitations:mutate`, body);
  }
};
