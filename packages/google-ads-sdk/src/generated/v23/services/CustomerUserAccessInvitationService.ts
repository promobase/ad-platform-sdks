// @generated
// fingerprint: sha256:36e87b39e4f3ef29563422bdb025a9756876c3f4974ca222264a8ec129f63ee3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerUserAccessInvitationRequest, MutateCustomerUserAccessInvitationResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerUserAccessInvitationService. Do not edit by hand.
export const customerUserAccessInvitationService = {
  mutateCustomerUserAccessInvitation(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessInvitationRequest, "customerId">): Promise<MutateCustomerUserAccessInvitationResponse> {
    return client.post<MutateCustomerUserAccessInvitationResponse>(`/v23/customers/${customerId}/customerUserAccessInvitations:mutate`, body);
  }
};
