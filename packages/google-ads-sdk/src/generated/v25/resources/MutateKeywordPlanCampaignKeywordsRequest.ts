// @generated
// fingerprint: sha256:3590e2d82a020d00877d9414ae2f2a0c383f7aecaf05ffe39c6f93703aee3abb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanCampaignKeywordOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateKeywordPlanCampaignKeywordsRequest. Do not edit by hand.
export interface MutateKeywordPlanCampaignKeywordsRequest {
  customerId?: string;
  operations?: KeywordPlanCampaignKeywordOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
