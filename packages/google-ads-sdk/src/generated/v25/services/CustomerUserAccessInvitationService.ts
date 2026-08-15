// @generated
// fingerprint: sha256:f940f7d1b602eb256774bcb0cfcdda977c4cb613640c68b28c37867694495803
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerUserAccessInvitationRequest, MutateCustomerUserAccessInvitationResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerUserAccessInvitationService. Do not edit by hand.
export const customerUserAccessInvitationService = {
  mutateCustomerUserAccessInvitation(client: HttpClient, customerId: string, body: Omit<MutateCustomerUserAccessInvitationRequest, "customerId">): Promise<MutateCustomerUserAccessInvitationResponse> {
    return client.post<MutateCustomerUserAccessInvitationResponse>(`/v25/customers/${customerId}/customerUserAccessInvitations:mutate`, body);
  }
};
