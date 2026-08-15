// @generated
// fingerprint: sha256:dcc2cd9b8c585141ab4c8e9f2e748608f72bcb00167c2a8a2f0601524304fe35
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanCampaignOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanCampaignsRequest. Do not edit by hand.
export interface MutateKeywordPlanCampaignsRequest {
  customerId?: string;
  operations?: KeywordPlanCampaignOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
