// @generated
// fingerprint: sha256:091f06cb5cb88c901399355cd17dbe812ef9a7255cb2f9561e88003f1eab3397
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanCampaignKeywordOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateKeywordPlanCampaignKeywordsRequest. Do not edit by hand.
export interface MutateKeywordPlanCampaignKeywordsRequest {
  customerId?: string;
  operations?: KeywordPlanCampaignKeywordOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
