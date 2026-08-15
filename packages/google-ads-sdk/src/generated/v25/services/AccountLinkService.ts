// @generated
// fingerprint: sha256:294f19ec1cd9e65767368d93504470594fb28afb71a3b76b1eec16326ed06a28
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateAccountLinkRequest, CreateAccountLinkResponse, MutateAccountLinkRequest, MutateAccountLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AccountLinkService. Do not edit by hand.
export const accountLinkService = {
  createAccountLink(client: HttpClient, customerId: string, body: Omit<CreateAccountLinkRequest, "customerId">): Promise<CreateAccountLinkResponse> {
    return client.post<CreateAccountLinkResponse>(`/v25/customers/${customerId}/accountLinks:create`, body);
  },

  mutateAccountLink(client: HttpClient, customerId: string, body: Omit<MutateAccountLinkRequest, "customerId">): Promise<MutateAccountLinkResponse> {
    return client.post<MutateAccountLinkResponse>(`/v25/customers/${customerId}/accountLinks:mutate`, body);
  }
};
