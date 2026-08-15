// @generated
// fingerprint: sha256:3bc92188bdba7b2c3b17d85124a2509bff086b3e8c1e87f4973750473f356343
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAccountBudgetProposalRequest, MutateAccountBudgetProposalResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AccountBudgetProposalService. Do not edit by hand.
export const accountBudgetProposalService = {
  mutateAccountBudgetProposal(client: HttpClient, customerId: string, body: Omit<MutateAccountBudgetProposalRequest, "customerId">): Promise<MutateAccountBudgetProposalResponse> {
    return client.post<MutateAccountBudgetProposalResponse>(`/v25/customers/${customerId}/accountBudgetProposals:mutate`, body);
  }
};
