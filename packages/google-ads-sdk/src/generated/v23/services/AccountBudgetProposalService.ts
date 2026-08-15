// @generated
// fingerprint: sha256:9e06e3d0aa1fc388a8f02fd8f99549ca49d83291dca719aade90e4b0b3a49529
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAccountBudgetProposalRequest, MutateAccountBudgetProposalResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AccountBudgetProposalService. Do not edit by hand.
export const accountBudgetProposalService = {
  mutateAccountBudgetProposal(client: HttpClient, customerId: string, body: Omit<MutateAccountBudgetProposalRequest, "customerId">): Promise<MutateAccountBudgetProposalResponse> {
    return client.post<MutateAccountBudgetProposalResponse>(`/v23/customers/${customerId}/accountBudgetProposals:mutate`, body);
  }
};
