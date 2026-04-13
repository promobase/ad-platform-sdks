import type { CreateAccountLinkRequest, CreateAccountLinkResponse, MutateAccountLinkRequest, MutateAccountLinkResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AccountLinkService. Do not edit by hand.
export const accountLinkService = {
  createAccountLink(client: HttpClient, customerId: string, body: Omit<CreateAccountLinkRequest, "customerId">): Promise<CreateAccountLinkResponse> {
    return client.post<CreateAccountLinkResponse>(`/v23/customers/${customerId}/accountLinks:create`, body);
  },

  mutateAccountLink(client: HttpClient, customerId: string, body: Omit<MutateAccountLinkRequest, "customerId">): Promise<MutateAccountLinkResponse> {
    return client.post<MutateAccountLinkResponse>(`/v23/customers/${customerId}/accountLinks:mutate`, body);
  }
};
