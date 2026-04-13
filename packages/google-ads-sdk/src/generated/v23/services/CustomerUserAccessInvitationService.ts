import type { MutateCustomerUserAccessInvitationRequest, MutateCustomerUserAccessInvitationResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerUserAccessInvitationService. Do not edit by hand.
export const customerUserAccessInvitationService = {
  mutateCustomerUserAccessInvitation(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessInvitationRequest, "customerId">): Promise<MutateCustomerUserAccessInvitationResponse> {
    return client.post<MutateCustomerUserAccessInvitationResponse>(`/v23/customers/${customerId}/customerUserAccessInvitations:mutate`, body);
  }
};
