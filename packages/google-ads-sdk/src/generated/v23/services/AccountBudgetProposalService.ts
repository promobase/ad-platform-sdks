import type { MutateAccountBudgetProposalRequest, MutateAccountBudgetProposalResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AccountBudgetProposalService. Do not edit by hand.
export const accountBudgetProposalService = {
  mutateAccountBudgetProposal(client: HttpClient, customerId: string, body: Omit<MutateAccountBudgetProposalRequest, "customerId">): Promise<MutateAccountBudgetProposalResponse> {
    return client.post<MutateAccountBudgetProposalResponse>(`/v23/customers/${customerId}/accountBudgetProposals:mutate`, body);
  }
};
