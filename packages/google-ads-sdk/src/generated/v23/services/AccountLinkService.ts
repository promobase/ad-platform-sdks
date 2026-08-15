// @generated
// fingerprint: sha256:6664c072e7870b298cb59965d98d167ad9cca4f3de11b0ba5d7bdb8924e793f7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateAccountLinkRequest, CreateAccountLinkResponse, MutateAccountLinkRequest, MutateAccountLinkResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AccountLinkService. Do not edit by hand.
export const accountLinkService = {
  createAccountLink(client: HttpClient, customerId: string, body: Omit<CreateAccountLinkRequest, "customerId">): Promise<CreateAccountLinkResponse> {
    return client.post<CreateAccountLinkResponse>(`/v23/customers/${customerId}/accountLinks:create`, body);
  },

  mutateAccountLink(client: HttpClient, customerId: string, body: Omit<MutateAccountLinkRequest, "customerId">): Promise<MutateAccountLinkResponse> {
    return client.post<MutateAccountLinkResponse>(`/v23/customers/${customerId}/accountLinks:mutate`, body);
  }
};
