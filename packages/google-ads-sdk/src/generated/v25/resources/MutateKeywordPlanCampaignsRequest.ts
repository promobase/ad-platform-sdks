// @generated
// fingerprint: sha256:4fd41da7598b905ed05c0edf412e47086ac80bfcd39a97816efe7f9237699fe9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanCampaignOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateKeywordPlanCampaignsRequest. Do not edit by hand.
export interface MutateKeywordPlanCampaignsRequest {
  customerId?: string;
  operations?: KeywordPlanCampaignOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
