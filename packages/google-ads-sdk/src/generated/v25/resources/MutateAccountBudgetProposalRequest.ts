import type { AccountBudgetProposalOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAccountBudgetProposalRequest. Do not edit by hand.
export interface MutateAccountBudgetProposalRequest {
  customerId?: string;
  operation?: AccountBudgetProposalOperation;
  validateOnly?: boolean;
}
