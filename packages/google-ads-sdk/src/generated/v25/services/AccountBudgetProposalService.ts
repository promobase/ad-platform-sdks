import type { MutateAccountBudgetProposalRequest, MutateAccountBudgetProposalResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AccountBudgetProposalService. Do not edit by hand.
export const accountBudgetProposalService = {
  mutateAccountBudgetProposal(client: HttpClient, customerId: string, body: Omit<MutateAccountBudgetProposalRequest, "customerId">): Promise<MutateAccountBudgetProposalResponse> {
    return client.post<MutateAccountBudgetProposalResponse>(`/v25/customers/${customerId}/accountBudgetProposals:mutate`, body);
  }
};
